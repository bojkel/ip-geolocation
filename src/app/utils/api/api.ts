import { IpGeolocationApiKey } from "./api.key";

export const IpGeolocationUrl = (IP: string | null) => {
    return `https://api.ipgeolocation.io/ipgeo?apiKey=${IpGeolocationApiKey}&ip=${IP}`;
}
