import background from '../../assets/images/background.png';
import CreateProfileForm from './page-components/CreateProfileForm';
export default function CreateProfilePage() {
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <CreateProfileForm />
      </div>
    </div>
  );
}
