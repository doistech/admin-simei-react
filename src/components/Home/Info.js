import './Home.css';

function Info () {
    return (
   <div className="cardConteiner">

   <div className="colunm_info">
    <div className="container_info">
   <p className='notificacao'>Notificações</p>
   <hr></hr>
   </div> 
   </div>
   <div className="colunm_info">
   <div className ="container_info">
   <p className='desenvolvimento'>Desenvolvimentos</p>
   <hr></hr>
   <span className='span_info1'>Edição de Pedido</span>
   <div></div>
   <span className='span_info2'>Previsão: 20-06-2022</span>
   <hr></hr>
   <span className='span_info1'>Cancelamento de Pedido</span>
   <div></div>
   <span className='span_info2'>Previsão: 20-06-2022</span>
   <hr></hr>
   <span className='span_info1'>Emissão de Relatórios</span>
   <div></div>
   <span className='span_info2'>Previsão: 20-06-2022</span>
   <hr></hr>
   </div> 
</div>

</div>
    )
}

export default Info