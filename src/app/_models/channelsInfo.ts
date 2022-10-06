export class ChannelsInfo
{
    name:string;
    url:string;    
    categoryName:string;

    constructor(name:string,url:string,categoryName:string)
    {
        this.name=name;
        this.url=url;
        this.categoryName=categoryName;
    }
}