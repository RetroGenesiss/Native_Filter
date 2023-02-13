export type CityType = {
    title: string,
    houses: HouseType[]
    governmentBuildings: governmentBuildingsType[]
    citizensNumber: number
}

export type governmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE STATION'
    address: AddressType
    budget: number
    staffCount: number
}

export type HouseType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type AddressType = {
    number: number
    street: StreetType
}

type StreetType = {
    title: string
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}
// это не чистая ф-ция, потому ее надо было модифицировать

export const getBuildingsWithStaffCountGreaterThen = (buildings: governmentBuildingsType[], number: number) => {
return buildings.filter(b => b.staffCount > number)
}
// это ф-ция чистая