import { AppButton } from '../components/UI/AppButton'
import { Heading } from '../components/Typography/Heading'
import { AppInput } from '../components/UI/AppInput'
import { useState } from 'react';

const Welcome = () => {
 
	const[state, setState] = useState("");

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='welcome'>
					<Heading
						headingType='h1'
						headingText='Добро пожаловать в квиз от лучшего учебного центра'
					/>
					<form className='welcome__form'>
						<AppInput
							inputLabel='Ваше имя'
							id='username'
							inputType='text'
							inputPlacaholder='Ваш ответ'
							errorMessage='Введите имя'
							hasError={false}
							onChange={(e) => (e)}
							
						/>
						<AppInput
							inputLabel='Ваш номер'
							id='phone'
							inputType='tel'
							inputPlacaholder='+998 9- --- -- -- '
							errorMessage='Введите номер в правильном формате'hasError={false}
							onChange={(e) => (e)}
						/>
						<AppButton buttonText='Далее' />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Welcome
