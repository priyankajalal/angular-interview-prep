import { Pipe,PipeTransform} from '@angular/core';
@Pipe({name:"square"})
export class SquarePipe implements PipeTransform{
    transform(n:number) {
        return n*n;
    }
}