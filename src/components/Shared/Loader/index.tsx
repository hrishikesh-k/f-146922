import './Loader.scss';

export default function Loader ({invert}: {invert?: boolean}) {
  return (
    <div className="text-center py-10 flex justify-center">
        <div className={`loader ${invert && 'loader--invert'}`}></div>
    </div>
  )
}