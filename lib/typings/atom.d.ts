export {}
declare module "atom" {
  interface ConfigValues {
    "atom-typescript.unusedAsInfo": boolean
    "atom-typescript.autocompletionSuggestionPriority": number
    "atom-typescript.locale": string
  }

  interface TextBuffer {
    emitDidStopChangingEvent(): void
  }

  interface TextEditor {
    isDestroyed(): boolean
  }
}
