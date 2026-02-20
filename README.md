


en mysql 5.xx ejecutar
ALTER DATABASE tu_base_de_datos
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;
# Dev

1. Clonar el .env.template y crear el .env
2. Ejecutar el comando ```docker compose up -d```
3. Reconstruir el prisma client ```npm run prisma:migrate:prod```
   
   ```
    "prisma:migrate:prod": "prisma migrate deploy",
   ```

   //*arreglar el problema de secuencia rota en Postgres: 
/**  Verificar
 * SELECT setval(
 * pg_get_serial_sequence('"User_permission"', 'id'),
 * (SELECT MAX(id) FROM "User_permission"), true
 * );
 */
Setear
SELECT setval(
  pg_get_serial_sequence('"Tipo_equipo"', 'id'),
  (SELECT MAX(id) + 1 FROM "Tipo_equipo"),
  false
);
//* Revisar el valor actual de la secuencia
// Puedes revisar el valor actual de la secuencia con:
//  SELECT last_value FROM "User_permission_id_seq";

//* Código para arreglar TODAS las Secuencias en POSTGRES después de una migración
/**
 * DO $$
 * DECLARE
 * r RECORD;
 * max_id BIGINT;
 * BEGIN
 * FOR r IN
 * SELECT
 * c.relname AS table_name,
 * a.attname AS column_name,
 * pg_get_serial_sequence(
 * quote_ident(c.relname),
 * a.attname
 * ) AS seq_name
 * FROM pg_class c
 * JOIN pg_attribute a ON a.attrelid = c.oid
 * JOIN pg_namespace n ON n.oid = c.relnamespace
 * WHERE c.relkind = 'r'
 * AND n.nspname = 'public'
 * AND pg_get_serial_sequence(
 * quote_ident(c.relname),
 * a.attname
 * ) IS NOT NULL
 * LOOP
 * EXECUTE format(
 * 'SELECT COALESCE(MAX(%I), 0) FROM %I',
 * r.column_name,
 * r.table_name
 * )
 * INTO max_id;
 * EXECUTE format(
 * 'SELECT setval(%L, %s, true)',
 * r.seq_name,
 * max_id
 * );
 * RAISE NOTICE 'Secuencia % sincronizada con % = %',
 * r.seq_name,
 * r.table_name,
 * max_id;
 * END LOOP;
 * END $$;
 */

# nodePalnortev2
