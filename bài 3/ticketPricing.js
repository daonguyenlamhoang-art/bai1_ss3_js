const customerName = "Tran Thi Mai";
const customerAge = 20;
const movieRating = "T18";
const seatType = "VIP";
const isStudent = true;
const isWeekday = true;
const BASE_PRICE = 80000;
let surcharge = 0;
let seatName = "";
let discountPercent = 0;
let ticketPrice = 0;
let discountAmount = 0;
let finalPayment = 0;
let isValid = true;

if (movieRating === "T18" && customerAge < 18) {
    console.warn("GIAO DICH THAT BAI: Khach hang duoi 18 tuoi khong duoc phep xem phim nhan T18");
    isValid = false;
}
if (isValid === true) {
    switch (seatType) {
        case "STANDARD":
            surcharge = 0;
            seatName = "Ghe Thuong";
            break;
        case "VIP":
            surcharge = 15000;
            seatName = "Ghe VIP";
            break;
        case "COUPLE":
            surcharge = 40000;
            seatName = "Ghe Doi Couple";
            break;
        default:
            console.error("GIAO DICH THAT BAI: Loai ghe khong hop le!");
            isValid = false;
    }
}
if (isValid === true) {
    if (isStudent === true && isWeekday === true) {
        discountPercent = 20;
    } else {
        discountPercent = 0;
    }
    ticketPrice = BASE_PRICE + surcharge;
    discountAmount = (ticketPrice * discountPercent) / 100;
    finalPayment = ticketPrice - discountAmount;
    const giftMessage = seatType === "COUPLE" ? "Tang 01 ly nuoc ngot co lon" : "Khong ap dung qua tang";
    console.log(`
=================================
       HOA DON BAN VE CINEMA CGV
=================================
Khach hang: ${customerName}
Do tuoi: ${customerAge} | Nhan phim: ${movieRating} (Hop le)
Hang ghe: ${seatName}
Gia ve co so: ${BASE_PRICE} VND
Phu thu ghe: ${surcharge} VND
Tong gia ve goc: ${ticketPrice} VND
Chiet khau HSSV (${discountPercent}%): -${discountAmount} VND
-------------------------------------------
TONG TIEN THANH TOAN: ${finalPayment} VND
Uu dai di kem: ${giftMessage}
============================= `);
}