import { Currency } from "./currency.model";
import { TimeZone } from "./timezone.model";

export interface Geolocation {
    calling_code: string,
    city: string,
    connection_type: string,
    continent_code: string,
    continent_name: string,
    country_capital: string,
    country_code2: string,
    country_code3: string,
    country_flag: string,
    country_name: string,
    country_name_official: string,
    country_tld: string,
    currency: Currency,
    district: string,
    geoname_id: string,
    hostname: string,
    ip: string,
    is_eu: boolean,
    isp: string,
    languages: string,
    latitude: number,
    longitude: number,
    organization: string,
    state_code: string,
    state_prov: string,
    time_zone: TimeZone,
    zipcode: string,
}
