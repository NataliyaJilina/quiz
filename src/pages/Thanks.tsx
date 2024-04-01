import { Option } from '../components/Option'
import { Heading2 } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'
import { Heading } from '../components/Typography/Heading'

const Thanks = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='thanks'>
					<Option img='./img/bell.png' alt='bell' />
					<Heading headingText='Спасибо за прохождение опроса!' />
					<p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <AppButton buttonText='Получить ссылку'/>
				</div>
			</div>
		</div>
	)
}

export default Thanks
