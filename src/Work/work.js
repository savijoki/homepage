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
            date="2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="material-icons">stars</i>}>
            <h3 className="vertical-timeline-element-title">1st place in eEemeli competition</h3>
            <h5 className="vertical-timeline-element-subtitle">Oy Tawasta OS Technologies Ltd.</h5>
            <p>
              Lead developer in Futural Skills product that won eEemeli award for best eLearning solution 2018.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017"
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
            date="2015 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="material-icons">work</i>}>
            <h3 className="vertical-timeline-element-title">Software Specialist</h3>
            <h5 className="vertical-timeline-element-subtitle">Oy Tawasta OS Technologies Ltd.</h5>
            <p>
              Development in Odoo, Magento, Joomla 
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    );
  }
}
