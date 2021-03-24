import React from 'react';

class ResourceCell extends React.PureComponent {
<<<<<<< HEAD
  render() {
    const {
      data: {
        color,
        text,
        data: { avatar, age, discipline },
      },
    } = this.props;
    return (
      <div className='dx-template-wrapper'>
        <div className='name' style={{ background: color }}>
          <h2>{text}</h2>
        </div>
        <div className='avatar'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='info' style={{ color: color }}>
          Members: {age}
          <br />
          <b>{discipline}</b>
        </div>
      </div>
    );
  }
=======
	render() {
		const {
			data: {
				color,
				text,
				data: {avatar},
			},
		} = this.props;
		return (
			<div className="dx-template-wrapper">
				<div className="name" style={{background: color}}>
					<h2>{text}</h2>
				</div>
				<div className="avatar">
					<img src={avatar} alt="" />
				</div>
			</div>
		);
	}
>>>>>>> styling/rob
}

export default ResourceCell;
