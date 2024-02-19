import EarthCanvas from './RotatingWorldSphere.tsx';
type Props = { formRef: React.LegacyRef<HTMLFormElement> | undefined };
function ContactMe({ formRef }: Props) {
  //   const [loading, setLoading] = useState<boolean>();
  return (
    <section
      className={` flex md:flex-row flex-col-reverse  md:justify-between md:px-24 items-center justify-center md:h-screen h-auto`}
      id='contact'
    >
      <div className=' h-screen p-8 rounded-2xl'>
        <form
          ref={formRef}
          // onSubmit={handleSubmit}
          className='flex flex-col gap-8'
        >
          <div className='py-4 lg:py-8 px-4 max-w-screen-sm'>
            <h2 className='mb-2 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white p-2'>
              Contact Me
            </h2>
            <p className='mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-sm'>
              Want to talk with me? Just put an email here. I will respond as
              quickly as possible
            </p>
            <form action='#' className='space-y-8'>
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
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='yourname@gmail.com'
                  required
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
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Let me know how we can help you'
                  required
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
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Type your message here...'
                ></textarea>
              </div>
              <button
                type='submit'
                className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue sm:w-fit hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue dark:bg-blue dark:hover:bg-white dark:focus:ring-white hover:text-blue'
              >
                Send message
              </button>
            </form>
          </div>
        </form>
      </div>

      <div className='md:flex-1 xl:h-screen md:h-[550px]'>
        <EarthCanvas />
      </div>
    </section>
  );
}

export default ContactMe;
