export interface Ipost {
    body: string,
    title: string,
    id: string

}

export interface responsepost {
    [ key: string ]: Ipost
}