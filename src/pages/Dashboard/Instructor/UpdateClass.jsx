

const UpdateClass = () => {
    return (
      <div className="w-full px-4">
        <Helmet>
          <title>Rhythm | Add Class</title>
        </Helmet>
        <h2 className="text-center font-bold text-3xl my-10">Add a New Class</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body w-1/3 mx-auto bg-base-200 rounded-md pb-6 mb-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              placeholder="Class Name"
              className="input input-bordered"
            />
            {errors.name && errors.name.type === 'required' && (
              <span className="text-error">{errors.name.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>

            <input
              type="text"
              {...register('img')}
              placeholder="Image URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              {...register('instructorName')}
              readOnly
              value={user.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              {...register('email')}
              readOnly
              value={user.email}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              {...register('seats')}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              {...register('price')}
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value={'Add Class'}
            />
          </div>
        </form>
      </div>
    );
};

export default UpdateClass;