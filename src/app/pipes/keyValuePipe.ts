import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "myKeyValue"
})

export class KeyValuePipe implements PipeTransform{
    transform(obj){
        return Object.entries(obj).map(([k,v]) => {
            return {"key":k,"value":v}
        });
    }
}
