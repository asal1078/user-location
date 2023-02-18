
export class LocationDetail {
    lat : number = 32.6539;
    long : number = 51.6660;
    locationName : string;
    locationType : string;
    logoSrc : string = '/assets/images/default-location.png';

    constructor( input : any = {}){
        this.locationName = input.locationName;
        this.locationType = input.locationType;
    }
}
