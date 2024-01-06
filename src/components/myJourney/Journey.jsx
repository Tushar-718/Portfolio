import React from 'react'
import './../myJourney/journey.scss'
import { IoSchoolOutline as SchoolIcon } from "react-icons/io5";
import { MdWorkOutline as WorkIcon } from "react-icons/md";
import timelineElements from './timelineElement';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Journey = () => {
    let workIconStyle = { background: "#eab308" }
    let schoolIconStyle = { background: "#4f46e5" }
    return (
        <div className='journey container section'>
            <h2 className="title">My Journey</h2>
            <VerticalTimeline>
                {
                    timelineElements.map(ele => {
                        let isWorkIcon = ele.icon === "work";
                        return (
                            <VerticalTimelineElement
                                key={ele.key}
                                date={ele.date}
                                dateClassName='date'
                                iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                            >
                                <h3 className='vertical-timeline-element-title'>{ele.title}</h3>
                                <div className="element__container">
                                    <div className='vertical-timeline-element-subtitle'>{ele.company}</div>
                                    <div className='vertical-timeline-element-subtitle'>{ele.location}</div>
                                </div>
                                <p className='vertical-timeline-element-subtitle'>{ele.desc}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>

        </div>
    )
}

export default Journey