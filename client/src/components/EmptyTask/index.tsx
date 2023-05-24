import { BiTask } from 'react-icons/bi'

export default function EmptyTask() {
  return (
    <div
      className={
        'align-center border-t-1 mx-0 my-auto flex h-4/5 justify-center divide-y-4 px-8 py-3 '
      }
    >
      <div className="align-center mx-0 my-auto flex flex-col justify-center text-center text-lg leading-loose">
        <BiTask className={'mx-auto my-4'} size={54} />
        <h1 className={'font-normal leading-loose text-gray-300'}>
          Você não tem tarefas cadastradas
        </h1>
        <h1 className={'font-bold leading-loose text-gray-300'}>
          Crie tarefas e organize seus itens a fazer
        </h1>
      </div>
    </div>
  )
}
