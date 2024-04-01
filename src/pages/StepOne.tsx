import { AppButton } from '../components/UI/AppButton'
import { Heading } from '../components/Typography/Heading'

const StepOne = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='single-input-quiz'>
					<div className='indicator'>
						<div className='indicator__text'>
							<span className='indicator__description'>
								Скидка за прохождение опроса:
							</span>
							<span className='indicator__value'>15%</span>
						</div>
						<div className='indicator__progressbar'>
							<div className='indicator__unit indicator__unit-1'></div>
							<div className='indicator__unit indicator__unit-2'></div>
							<div className='indicator__unit indicator__unit-3'></div>
							<div className='indicator__unit indicator__unit-4'></div>
						</div>
					</div>
					<div className='question'>
						<Heading
							headingType='h2'
							headingText='1. Где вы узнали про нашу школу?'
						/>
						<label className='input-wrapper'>
							<input
								required
								type='text'
								name='answer'
								placeholder='Ваш ответ'
							/>
							<span id='error-message'>Введите ваш ответ</span>
						</label>
						<AppButton buttonText='Далее' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepOne
