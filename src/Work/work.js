import React from 'react';
import { Container } from 'reactstrap';
import './work.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Work extends React.Component {
  render() {
    return (
      <section id="work" ref="work">
        <Container className="text-center">
          <h2>Work & Education</h2>
        </Container>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="material-icons">school</i>}>
            <h3 className="vertical-timeline-element-title">Tampere University of Technology</h3>
            <h5 className="vertical-timeline-element-subtitle">Master of Science (MSc)</h5>
            <p>
              Completed Master of Science degree in TUT. My major was software engineering. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="material-icons">stars</i>}>
            <h3 className="vertical-timeline-element-title">1st place in eEemeli competition</h3>
            <h5 className="vertical-timeline-element-subtitle">Oy Tawasta OS Technologies Ltd.</h5>
            <p>
              Lead developer in Futural Skills product that won eEemeli award for best eLearning solution 2018.
              Futural Skills is an application for managing practical learning.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="material-icons">school</i>}>
            <h3 className="vertical-timeline-element-title">Pitky scholarship</h3>
            <h5 className="vertical-timeline-element-subtitle">Member of the best project group in TUT</h5>
            <p>
              Member of the best project team that was awarded the Pitky scholarship (course TIE-13106).
              My responsibilities were frontend designing, localization and quality assurance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="material-icons">school</i>}>
            <h3 className="vertical-timeline-element-title">Tampere University of Technology</h3>
            <h5 className="vertical-timeline-element-subtitle">Bachelor of Science (BSc)</h5>
            <p>
              Completed Bachelor of Science degree in TUT. My major was software engineering and
              my minor was web systems. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="material-icons">location_city</i>}>
            <h3 className="vertical-timeline-element-title">Software Specialist</h3>
            <h5 className="vertical-timeline-element-subtitle">Oy Tawasta OS Technologies Ltd.</h5>
            <p>
              Started to work for Tawasta. I mainly develop modules for customers' needs in Odoo, Magento, Joomla.
              Giving customer support is also part of my job.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="material-icons">school</i>}>
            <h3 className="vertical-timeline-element-title">Tampere University of Technology</h3>
            <h5 className="vertical-timeline-element-subtitle">Information technology</h5>
            <p>
              Started studying in TUT.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    );
  }
}
