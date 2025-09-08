import { useState } from 'react'
import { Switch } from '@mui/material'

const Settings = () => {
  const [isEmailOn, setisEmailOn] = useState(false)
  const [CommentToggles, setCommentToggles] = useState({
    comments_on_post: false,
    comments_on_mention: false,
    private_comments: false,
  })
  const [ClassEnrolled, setClassEnrolled] = useState({
    posts_and_work: false,
    returned_work_grades: false,
    invitation_to_join: false,
    due_date: false
  })
  const [ClassTeaching, setClassTeaching] = useState({
    late_submission: false,
    resubmission: false,
    invitation_to_teach: false, 
    post_status: false
  })

  const emailNotification = (isItOn) => {
    setisEmailOn(isItOn)
    if(!isItOn) return
  }
  const handle_comment_toggle = (toggle) => (e) => {
    setCommentToggles((prev) => ({
      ...prev,
      [toggle]: e.target.checked,
    }))
  }
    const handle_class_enrolled_toggles = (toggle) => (e) => {
    setClassEnrolled((prev) => ({
      ...prev,
      [toggle]: e.target.checked
    }))
  }
  const handle_class_teaching_toggles = (toggle) => (e) => {
    setClassTeaching((prev) => ({
      ...prev,
      [toggle]: e.target.checked
    }))
  }
  return (
    <div className='flex flex-col mx-auto max-w-[808px] p-[1.5rem] '>
      <div className='p-[1.5rem] mb-[2rem] bg-white border-1 border-solid border-[#dadce0] rounded-[0.5rem] overflow-hidden w-full'>
          <h2 className='mb-[0.5rem] text-[2rem] text-[#202124] leading-[2.5rem]'>Profile</h2>
          <h3 className='tracking-[0.25px] text-[14px] font-[550] text-[#3c4043]'>Profile picture</h3>
          <div className='flex items-center justify-center h-12 w-30 '>
            <button className='flex h-10 w-28 justify-center items-center rounded-4xl hover:bg-blue-50 hover:cursor-pointer '>
              <img className='rounded-full size-[32px] mr-2' src="/Profile/Sample_Profile.png" alt="" />
              <span className='text-[14px] text-blue-800 font-[550]'>Change</span>
            </button>
          </div>  
          <h3 className='tracking-[0.25px] text-[14px] font-[550] text-[#3c4043]'>Account Settings</h3>
          <div className='tracking-[0.2px] leading-5 text-[14px] text-[#3c4043]'>Change your password and security options, and access Google services. <a className='underline text-blue-500' href="">Manage</a> </div>
          <h3 className='tracking-[0.25px] mt-4 text-[14px] font-[550] text-[#3c4043]'>Change Name</h3>
          <div className='tracking-[0.2px] leading-5 text-[14px]  text-[#3c4043]'>To change your name, go to your <a className='underline text-blue-500'>account settings</a>.</div>
      </div>
      <div className='p-[1.5rem] bg-white border-1 border-solid border-[#dadce0] rounded-[0.5rem] overflow-hidden w-full'>
        <div className='notifications'>
          <h2 className='mb-4 text-[2rem] leading-[2.5rem] text-[#202124]'>Notifications</h2>
          <div className='pb-2'>
            <div className='mb-4'>
              <h3 className='text-[1.375rem]  text-[#3c4043] leading-[1.75rem]'>Email</h3>
              <p className='text-[13px] '>These settings apply to the notifications you get by email. <a className='underline text-blue-500' href="">Learn more</a></p>
            </div>
            <label className='cursor-pointer flex justify-between text-sm text-[#3c4043] font-[550] leading-5 mb-6'>
                <div className='label'>Allow email notifications</div>
                <Switch
                  checked={isEmailOn}
                  onChange={(e)=>{emailNotification(e.target.checked)}}
                  color='primary'
                />
            </label>  
          </div>
        </div>
        {isEmailOn && (<div>
          <div className="comments text-[#3c4043]">
            <h3 className='mb-4 leading-6 font-medium '>Comments</h3>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Comments on your posts</div>
              <Switch
                  checked={CommentToggles.comments_on_post}
                  onChange={handle_comment_toggle('comments_on_post')}
                  color='primary'
              />
            </label>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Comments that mention you</div>
              <Switch
                  checked={CommentToggles.comments_on_mention}
                  onChange={handle_comment_toggle('comments_on_mention')}
                  color='primary'
              />
            </label>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Private comments on work</div>
              <Switch
                  checked={CommentToggles.private_comments}
                  onChange={handle_comment_toggle('private_comments')}
                  color='primary'
              />
            </label>
          </div>
          <div className="classes_enrolled text-[#3c4043]">
            <h3 className='mb-4 leading-6 font-medium '>Classes you're enrolled in</h3>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Work and other posts from teachers</div>
              <Switch
                  checked={ClassEnrolled.posts_and_work}
                  onChange={handle_class_enrolled_toggles('posts_and_work')}
                  color='primary'
              />
            </label>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Returned work and grades from your teachers</div>
              <Switch
                  checked={ClassEnrolled.returned_work_grades}
                  onChange={handle_class_enrolled_toggles('returned_work_grades')}
                  color='primary'
              />
            </label>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Invitations to join classes as a student</div>
              <Switch
                  checked={ClassEnrolled.invitation_to_join}
                  onChange={handle_class_enrolled_toggles('invitation_to_join')}
                  color='primary'
              />
            </label>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Due-date reminders for your work</div>
              <Switch
                  checked={ClassEnrolled.due_date}
                  onChange={handle_class_enrolled_toggles('due_date')}
                  color='primary'
              />
            </label>
          </div>
          <div className="classes_teaching text-[#3c4043]">
            <h3 className='mb-4 leading-6 font-medium '>Classes you teach</h3>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Late submissions of student work</div>
              <Switch
                  checked={ClassTeaching.late_submission}
                  onChange={handle_class_teaching_toggles('late_submission')}
                  color='primary'
              />
            </label>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Resubmissions of student work</div>
              <Switch
                  checked={ClassTeaching.resubmission}
                  onChange={handle_class_teaching_toggles('resubmission')}
                  color='primary'
              />
            </label>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Invitations to co-teach classes</div>
              <Switch
                  checked={ClassTeaching.invitation_to_teach}
                  onChange={handle_class_teaching_toggles('invitation_to_teach')}
                  color='primary'
              />
            </label>
            <label className='flex justify-between items-center mb-6'>
              <div className="font-semibold text-sm leading-5">Scheduled post published or failed</div>
              <Switch
                  checked={ClassTeaching.post_status}
                  onChange={handle_class_teaching_toggles('post_status')}
                  color='primary'
              />
            </label>
          </div>
        </div>)}

      </div>
    </div>
  )
}

export default Settings