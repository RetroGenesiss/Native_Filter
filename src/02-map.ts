import {governmentBuildingsType, HouseType} from "./02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: governmentBuildingsType[]) => {
return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(h => 'Hello guys from ${h.address.street.title}');

}