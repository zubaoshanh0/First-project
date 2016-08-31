
import { observable } from 'mobx';


export class test {
    @observable timerData = {
    	secondsPassed: 0,
    	poleft:"",
	}	

	count() {
		this.handler=setInterval(() => {
    		this.timerData.secondsPassed++;

    		this.timerData.poleft=-(this.timerData.secondsPassed*400%2000);
		}, 3000)
	}

	clear(){
		window.clearInterval(this.handler)
	}

	updatePosition(index){
		console.log(index)
	}
	imgrun(e){
		console.log(e.target.id)
		testInstance.timerData.secondsPassed=e.target.id
		testInstance.timerData.poleft=-(testInstance.timerData.secondsPassed*400%2000);
		
	}
}

export const testInstance = new test();
