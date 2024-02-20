import { useState } from 'react';
import EarthCanvas from './RotatingWorldSphere.tsx';
type Props = {};
import emailjs from '@emailjs/browser';

function ContactMe({}: Props) {
  const [loading, setLoading] = useState<boolean>();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID as string,
        import.meta.env.VITE_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: 'Tharindu Jayawardhana',
          from_email: form.email,
          to_email: 'tharinduimalkajayawardhana@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_ID as string
      )
      .then(
        () => {
          setLoading(false);
          alert('Email sent successfully');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          alert('Something went wrong');
          console.log(error);
        }
      );
  };

  return (
    <section
      className={` flex md:flex-row flex-col-reverse  md:justify-between md:items-center md:px-24 items-center`}
      id='contact'
    >
      <div className=' h-auto px-8 rounded-2xl'>
        <div
          // onSubmit={handleSubmit}
          className='flex flex-col gap-8'
        >
          <div className='lg:py-8 px-4 md:max-w-screen max-w-screen-sm'>
            <h2 className='mb-2 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white p-2'>
              Contact Me
            </h2>
            <p className='mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-sm'>
              Want to talk with me? Just put an email here. I will respond as
              quickly as possible
            </p>
            <form onSubmit={handleSubmit} className='space-y-8'>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='yourname@gmail.com'
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Let me know how we can help you'
                  required
                  onChange={handleChange}
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                >
                  Your message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Type your message here...'
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type='submit'
                className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue sm:w-fit hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue dark:bg-blue dark:hover:bg-white dark:focus:ring-white hover:text-blue'
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='md:flex-1 xl:h-screen md:h-[550px] h-[450px]'>
        <EarthCanvas />
      </div>
    </section>
  );
}

export default ContactMe;
