import { Button } from '@/components/ui/button';

export default function Login() {
  return (
    <>
      <div className='flex'>
        <div className='flex-1'>
          <div className='grid grid-cols-2'>
            <Button>Google</Button>
            <Button>Github</Button>
            <Button>Kakao</Button>
            <Button>Naver</Button>
          </div>
        </div>
      </div>
      <div>- or -</div>
      <div>
        <form>
          <label htmlFor=''>
            Email
            <input type='' />
          </label>
          <label htmlFor=''>
            Password
            <input type='' />
          </label>
          <div className='flex'>
            <label htmlFor=''>
              <input type='' />
              Remember me
              <a href=''>Forgot password?</a>
            </label>
          </div>
          <Button>Login with your account</Button>
        </form>
      </div>
    </>
  );
}
