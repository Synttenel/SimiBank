export type Event = {
    name: string,
    image: string,
    context: string,
    effect: () => void
}