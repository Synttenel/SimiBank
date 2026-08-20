export type ShopItem = {
  id: number,
  name: string,
  image: string,
  price: number,
  ammount: number,
  description: string,
  effect: () => void
}