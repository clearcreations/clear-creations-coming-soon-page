import React, {useState, useEffect} from 'react'


const Progress = () => {

    const [showContent, setShowcontent] = useState(1);
    const [progressHeight, setProgressHeight] = useState(0)
    const handleContent = (selectedStage) => {
        setShowcontent(selectedStage);
        const heightPercentage = (selectedStage - 1) * 25;
        setProgressHeight(heightPercentage);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setShowcontent((prevContent) => (prevContent % 3) + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    
  return (
    <div className='service-container'>
        <div className="progress-container">
            <div className="progress-bar"  >
                <div className="progress" style={{ height: `${progressHeight}%` }}></div>
                <div className={showContent === 1 ? "circle circle1 active" : "circle circle1"} onClick={() => handleContent(1)}></div>
                <div className={showContent === 2 ? "circle circle2 active" : "circle circle2"} onClick={() => handleContent(2)}></div>
                <div className={showContent === 3 ? "circle circle3 active" : "circle circle3"} onClick={() => handleContent(3)}></div>
            </div>
        </div>
        <div className="service-contents">
                <div className={showContent === 1 ? 'service-content content1 active' : 'service-content content1'}>
                    1
                </div>
                <div className={showContent === 2 ? 'service-content content2 active' : 'service-content content2'}>
                    2
                </div>
                <div className={showContent === 3 ? 'service-content content3 active' : 'service-content content3'}>
                    3
                </div>
        </div>
    </div>
  )
}

export default Progress