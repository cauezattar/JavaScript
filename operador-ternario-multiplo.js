let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva confirmada"
                : (quartosDisponiveis > 0) ? "Aguarde confirmaçao"
                : "Sem quartos disponiveis";

console.log(statusReserva); // Saída: "Reserva confirmada"