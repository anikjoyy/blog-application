const ProfilePosts = () => {
  return (
    <div className='w-full flex mt-8 space-x-4'>
      {/* left side  */}
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
        <img
          src='https://i.ibb.co/HhJBj0v/reception.jpg'
          alt=''
          className='h-full w-full object-cover'
        />
      </div>
      {/* right side  */}
      <div className='flex flex-col w-[65%]'>
        <h1 className='text-xl md:text-2xl font-bold md:mb-2 mb-1'>
          10 Uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className='flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 space-x-4 md:mb-4'>
          <p className=''>@anikjoyy</p>
          <div className='flex space-x-2'>
            <p>24/09/2023</p>
            <p>19:24</p>
          </div>
        </div>
        <p className='text-sm md:text-md'>
          Lorem ipsum dolor sit. Ut consequuntur quis repudiandae. Rerum
          mollitia ab molestiae. Recusandae, nemo? Labore, quaerat?
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
