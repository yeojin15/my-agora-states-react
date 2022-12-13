import React from 'react'

const Form = () => {
  return (
    <div>
      <form action="" method="get" className="form">
        <div>
          <input type="text" placeholder='이름을 입력하세요'/>
        </div>
        <div>
          <input type="text" placeholder='제목을 작성하세요'/>
        </div>
        <div>
          <textarea placeholder='내용을 작성하세요'></textarea>
        </div>


      </form>
    </div>
  )
}

export default Form