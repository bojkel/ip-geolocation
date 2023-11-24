export interface TimeZone {
    current_time: string,
    current_time_unix: number,
    dst_savings: number,
    is_dst: boolean,
    name: string,
    offset: number,
    offset_with_dst: number,
}