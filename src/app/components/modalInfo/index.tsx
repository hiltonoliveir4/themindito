import { NumberFive, NumberFour, NumberOne, NumberThree, NumberTwo, X } from "@phosphor-icons/react";

interface ModalInfoProps {
    handleClickClose: () => void
}


export default function ModalInfo({handleClickClose}:ModalInfoProps){
    return(
        <div className="absolute top-7 md:right-12 bg-neutral-700 flex flex-col items-center justify-center m-5 p-3 rounded-lg md:w-96">
            <div className="mb-8">
                <div className="flex items-center">
                    <h1 className="font-bold text-lg w-full">Bem vindo!</h1>
                    <button onClick={handleClickClose}>
                        <X size={22} className="text-white"/>
                    </button>
                </div>
                <p>
                    Aqui, a diversão está garantida com nosso sorteio automático de temas! 
                    Basta clicar no botão e deixe que nosso sistema escolha um tema aleatório para você. 
                    É simples e rápido. Divirta-se! 
                </p>
            </div>
            <div className="flex flex-col gap-1 items-center">
                <h2 className="font-bold text-lg w-full">Como jogar?</h2>
                <div className="flex items-center gap-5 mb-3 w-full">
                    <NumberOne size={32} weight="bold" className="text-white"/>
                    <p className="w-full">
                        Separe as suas cartas de numeração, as embaralhe e entregue uma para cada jogador
                    </p>
                </div>
                <div className="flex items-center gap-5 mb-3 w-full">
                    <NumberTwo size={32} className="text-white"/>
                    <p className="w-full">
                        Sorteie um tema usando o nosso site
                    </p>
                </div>
                <div className="flex items-center gap-5 mb-3 w-full">
                    <NumberThree size={32} className="text-white"/>
                    <p className="w-full">
                        Cada jogador dá uma dica sobre o valor da sua carta relacionado com o tema
                    </p>
                </div>
                <div className="flex items-center gap-5 mb-3 w-full">
                    <NumberFour size={32} className="text-white"/>
                    <p className="w-full">
                        Os jogadores agora devem debater baseado nas dicas APENAS e ordenar, em ordem crescente, as cartas sem as revelar
                    </p>
                </div>
                <div className="flex items-center gap-5 mb-3 w-full">
                    <NumberFive size={32} className="text-white"/>
                    <p className="w-full">
                        Os jogadores ganham caso coloquem todas as cartas em ordem
                    </p>
                </div>
            </div>
        </div>
    )
}