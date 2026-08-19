export type Event = {
    name: string,
    context: string,
    effect: () => void
}