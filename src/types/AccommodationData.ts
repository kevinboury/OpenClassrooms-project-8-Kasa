export interface AccommodationData {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: HostData
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

export interface HostData {
  name: string
  picture: string
}