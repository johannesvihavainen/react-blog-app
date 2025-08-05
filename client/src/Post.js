export default function Post() {
    return (
        <div className="post">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1504233529578-6d46baba6d34?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="texts">
          <h2>Near Reine, Norway the Eliassen Rorbuer overlooks Moskenesøya.</h2>
          <p className="info">
            <a className='author'>Eliassen Rorbuer</a>
            <time >08-04-2025 17:15</time>
          </p>
          <p className='summary'>This is just one of many tiny fishing villages between the Lofoten Islands which is a fantastic place to eat or sleep while visiting the Arctic Circle.</p>
        </div>
      </div>
    )
}