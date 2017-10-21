import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player'


@Pipe({
	name: 'orderby'

})

export class OrderByPipe implements PipeTransform{

     // transform(value: Array<any>, args: string): object{
     //    if(args ==='ascending'){
     //        return value.score.sort()
     //    }else if(args === 'descending'){
     //      return value.sort().reverse

     //    }


     //  }








transform(array: Array<Player>): Array<Player> {
  console.log('Pipe starting')
    array.sort((a: Player, b: Player) => {
     console.log('sorting', a.score,' vs ', b.score);
      if (Number(a.score) < Number(b.score)) {
       console.log('a less than b')
        return 1;
      } else if (Number(a.score) > Number(b.score)) {
       console.log('b less than a');
        return -1;
      } else {
       console.log('b equals a');
        return 0;
      }
      // return ' working'
    });
    console.log(array);
    return array;
  }
















	// player:Player;
//testing where pipe is failing:
	// transform(value:any){
	// 	console.log(value);
	// 	// value[score] = 77
	// 	// var addMe = 999999
	// 	// value.score +=addMe;
	// 	return value+88;
	// }
//end testing


	// transform(xx: any): any {
	// 	console.log('in transform, array is', xx)
 //        if (xx !== undefined) {
 //            xx.sort((a: any, b: any) => {
 //              console.log(a,' a - b ', b)
 //                if ( a.score < b.score ){
 //                    return -1;
 //                } else if ( a.score > b.score ) {
 //                    return 1;
 //                } else {
 //                    return 0;   
 //                }
 //            });
 //        }
 //        console.log(xx);
 //        return xx;
 //      }










	// transform(array: any){





  // transform(ary: any, fn: Function = (a,b) => a['score'] > b['score'] ? 1 : -1): any {
  //   return ary.sort(fn)
  // }

	// transform(array: any[]): any[] {
 //    array.sort((a: any, b: any) => {
 //    	console.log('sorting', a.score,' vs ', b.score);
 //      if (a.score < b.score) {
 //      	console.log('a less than b')
 //        return -1;
 //      } else if (a.score > b.score) {
 //      	console.log('b less than a');
 //        return 1;
 //      } else {
 //      	console.log('b equals a');
 //        return 0;
 //      }
 //      // return ' working'
 //    });
 //    console.log(array);
 //    return array;
 //  }





	

}