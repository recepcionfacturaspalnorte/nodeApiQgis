

export class ProductDto {

  private constructor(
    /*
 id          Int      @id @default(autoincrement())
  title       String
  price       Int
  description String
  slug        String
  available   Boolean
  stock       Int
  sizes       String
  gender      String
  tags        String
  images      String
  category    Category @relation(fields: [categoryId], references: [id])
  categoryId  Int     */
    public id: number,
    public readonly ref: string,
    public readonly title: string,
    public readonly price: number,
    public readonly description: string,
    public readonly slug: string,
    public readonly available: boolean,
    public readonly stock: number,
    public readonly sizes: string,
    public readonly gender: string,
    public readonly tags: string,
    public readonly image: string,
    public images: string[],
    public readonly categoryId: string, // ID
  ) { }

  static create(props: { [key: string]: any; }): [string?, ProductDto?] {
    const {
      id,
      ref,
      title,
      price,
      description,
      slug,
      available,
      stock,
      sizes,
      gender,
      tags,
      image,
      images,
      categoryId
    } = props;


    if (!title) return ['Missing title'];



    if (!categoryId) return ['Missing categoryId'];
    let imgs = images;
    if (!images) {
      imgs = [];
    }
    if (!price) return ['Missing Price'];
    let stock1 = +stock;
    if (!stock) stock1 = 0;
    return [
      undefined,
      new ProductDto(
        id,
        ref,
        title,
        +price,
        description,
        slug,
        !!available,
        stock1,
        sizes,
        gender,
        tags,
        image,
        imgs,
        categoryId

      )
    ];


  }


}