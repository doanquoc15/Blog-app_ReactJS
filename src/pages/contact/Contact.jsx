import React from 'react';
import './contact.css'
import img from '../../user.jpg'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contactImg">
                <img src={img} alt="" />
            </div>
            <div className="contactText">
                <p className='text'>
                   <span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus numquam odit illo soluta qui tempore nihil sit non deserunt. Iste dolore ipsa quia
                    laboriosam itaque voluptas iusto vel corrupti excepturi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus numquam odit illo soluta qui tempore nihil sit non deserunt. Iste dolore ipsa quia
                    laboriosam itaque voluptas iusto vel corrupti excepturi!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime necessitatibus excepturi consequuntur hic error
                    ab neque reprehenderit dolorum autem harum! Natus perferendis facilis rem. Corporis aut veniam amet dolor tempora. <span>"</span>
                </p>
            </div>
        </div>
    );
};

export default Contact;