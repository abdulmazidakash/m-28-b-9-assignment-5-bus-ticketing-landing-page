// console.log('hello');

const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-field');
const couponBtnEl = document.getElementById('coupon-btn');
const defaultTextEl = document.getElementById('default-text');
const grandTotalEl = document.getElementById('grand-total');
const phoneNumberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn');



let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event){
	// console.log(event);

	const value = event.innerText;
	if(selectedSeat.includes(value)){
		return alert('seat already booked')
	}else if (selectedSeat.length < 4){

		event.classList.add('bg-green-500');
		event.classList.add('text-white');
	
		selectedSeat.push(event.innerText);
		totalBookedEl.innerText = selectedSeat.length;
	
		//decrease available seat 
		// const availableSeatValue = parseFloat(availableSeatEl.innerText);
		// const newAvailableValue = availableSeatValue - 1;
		// availableSeatEl.innerText = newAvailableValue;

		//remove default text
		defaultTextEl.classList.add('hidden');
	
	
		selectedSeatEl.innerHTML += `
			<li class="text base font-normal flex justify-between">
				<span>${event.innerText}</span>
				<span>economy</span>
				<span>550</span>
			</li>
		`
	
		//update total price
		totalPrice += 550;
		totalPriceEl.innerText = totalPrice.toFixed(2);
	
		//active coupon button
		if(selectedSeat.length > 3){
			couponInputEl.removeAttribute('disabled');
			couponBtnEl.removeAttribute('disabled')
		}

	}else{
		return alert('maximum seat booked')
	}

	
}

	//coupon button function 
	document.getElementById('coupon-btn').addEventListener('click', function(){
		const couponInputValue = couponInputEl.value;
		console.log(couponInputValue);

		let couponSave = 0;

		if (couponInputValue === 'NEW50' && couponInputValue === 'Couple 20'){
			alert('your provided coupon is not valid')
		}

		if (couponInputValue === 'NEW50'){
			couponSave = totalPrice * 0.15;
		}else if (couponInputValue === 'Couple 20'){
			couponSave = totalPrice * 0.20;
		}

		const showCouponPriceEl = document.getElementById('show-coupon-price');
		showCouponPriceEl.innerHTML = `
		<p>Discount</p>
		<p>
			<span>-BDT: </span>
			<span>${couponSave.toFixed(2)}</span>
		</p>
		
		`

		const grandTotalValue = totalPrice - couponSave;
		grandTotalEl.innerText = grandTotalValue.toFixed(2);
	});

	phoneNumberEl.addEventListener('input', function(e){
		const inputValue = e.target.value;
		// console.log(inputValue);

		if (inputValue.length >= 11){
			nextBtnEl.removeAttribute('disabled');

		}


	})

	document.getElementById('btn-continue').addEventListener('click', function(){
		window.location.reload();
	})