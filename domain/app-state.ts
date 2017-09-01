export type Status = "WaitingOnUs" | "WaitingOnThem";

export interface App {
  name: string
  status: Status
}

export interface AppState {
  apps: App[]
}