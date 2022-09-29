import './Home.css';


function Cards(){
return(

    <div className='cardConteiner'>
    <div className='CardsColunm'>
    <div className="card bg-primary">
        <p>PEDIDOS ABERTOS</p>
    </div>
    <div className="card bg-warning">
        <p>NOSSOS CLIENTES</p>
    </div>
    </div>

    <div className='CardsColunm'>
    <div className="card bg-success">
        <p>PEDIDOS CONCLUÍDOS</p>
    </div>
    <div className="card bg-color ">
        <p>NOSSOS PRODUTOS</p>
    </div>
    </div>
    
    <div className='CardsColunm'>
    <div className="card bg-danger">
        <p>PEDIDOS CANCELADOS</p>
    </div>
    <div className="card bg-info">
        <p>PAGAMENTOS PENDENTES</p>
    </div>
    </div>
    </div>
)
}

export default Cards;