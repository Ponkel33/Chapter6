import React from 'react';
import { useState } from 'react';


export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    //テキストエリアの変更時に入力値をStateに反映
    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'message':
                setMessage(value)
                break
        }
    }

    //テキストエリアのクリア時
    const handleClear = () => {
        setName('')
        setEmail('')
        setMessage('')
        setErrors({})
    }

    //バリデーションチェック
    const validate = () => {
        let isValid = true
        const tempErrors = {}
        if (!name) {
            tempErrors.name = 'お名前を入力してください'
            isValid = false
        } else if (name.length >= 30) {
            tempErrors.name = 'お名前は30文字以下で入力してください'
            isValid = false
        }
        if (!email) {
            tempErrors.email = 'メールアドレスを入力してください'
            isValid = false
        } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            tempErrors.email = 'メールアドレスの形式で入力してください'
            isValid = false
        }
        if (!message) {
            tempErrors.message = '本文を入力してください'
            isValid = false
        } else if (message.length >= 500) {
            tempErrors.message = '本文は500文字以下で入力してください'
            isValid = false
        }
        setErrors(tempErrors)
        return isValid 
    }

    //送信時
    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!validate()) {
            return
        }
        await fetch('https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        alert('送信しました。')

        handleClear()
    }


    return (
        <div className="max-w-3xl mx-auto my-2 p-2">

            <div className="text-2xl font-bold my-2 mb-6">問合わせフォーム</div>
                <div className="flex justify-between items-center max-w-3xl mx-auto my-2 p-2 mb-6">
                    <label htmlFor="name" className="w-1/4">お名前</label>
                    <div className="w-3/4">
                        <input id="name" value={name} onChange={handleChange} type="text" name="name" className="w-full border border-gray-300 rounded h-8 p-6" />
                        {errors.name && <div className="text-red-500">{errors.name}</div>}
                    </div>
                </div>

            
                <div className="flex justify-between items-center max-w-3xl mx-auto my-2 p-2 mb-6">
                    <label htmlFor="email" className="w-1/4">メールアドレス</label>
                    <div className="w-3/4">
                        <input id="email" value={email} onChange={handleChange} type="email" name="email" className="w-full border border-gray-300 rounded h-8 p-6" />
                        {errors.email && <div className="text-red-500">{errors.email}</div>}
                    </div>
                </div>
            
                <div className="flex justify-between items-center max-w-3xl mx-auto my-2 p-2 mb-6">
                    <label htmlFor="message" className="w-1/4">本文</label>
                    <div className="w-3/4">
                      <textarea id="message" value={message} onChange={handleChange} name="message" className="w-full border border-gray-300 rounded h-32 p-6"></textarea>
                      {errors.message && <div className="text-red-500">{errors.message}</div>}
                    </div>
                </div>
                
            <div className="flex justify-center">
                <button type='submit' className="bg-gray-800 text-white font-bold rounded-lg px-6 py-2 mr-4 hover:cursor-pointer" onClick={handleSubmit}>送信</button>
                <button type='button' className="bg-gray-200 text-gray-800 font-bold rounded-lg px-6 py-2 hover:cursor-pointer" onClick={handleClear}>クリア</button>
            </div>

        </div>
    )
}