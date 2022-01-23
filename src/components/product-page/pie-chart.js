import React from "react"
import { PieChart } from 'react-minimal-pie-chart';

//https://www.npmjs.com/package/react-minimal-pie-chart
//https://medium.com/@tgknapp11/render-a-chart-with-react-minimal-pie-chart-e30420c9276c
//https://github.com/toomuchdesign/react-minimal-pie-chart/blob/master/stories/index.tsx

const FAT_CALORY_PERCENTAGE = 52.94;
const CARB_CALORY_PERCENTAGE = 23.52;
const PROTEIN_CALORY_PERCENTAGE = 23.52;

class CnfPieChart extends React.Component {

    constructor(props) {
        super(props);
        if(props.TYPE === "CaloryDistribution") {
            this.FAT = props.FAT * FAT_CALORY_PERCENTAGE;
            this.PROTEIN = props.PROTEIN * PROTEIN_CALORY_PERCENTAGE;
            this.CARB = props.CARB * CARB_CALORY_PERCENTAGE;
            
        }
        else {
            this.FAT = props.FAT;
            this.PROTEIN = props.FAT;
            this.CARB = props.CARB;
        }
    }

    render() {

        const shiftSize = 3;
        return (
            <PieChart style={{ height: '171px', width : "auto" /*backgroundColor : 'gray'*/ }}
            data={
                [
                    { title: 'Fat',  value: this.FAT, color: '#FCD668' },
                    { title: 'Carb', value: this.CARB, color: '#4E8CF4' },
                    { title: 'Protein', value: this.PROTEIN, color: '#636363' },
                ]
            }



            label={({ dataEntry }) => dataEntry.title}

            labelStyle={{
                fontSize: "7px",
                fill: "#FFFFFF"
              }}

            labelPosition={70}
            lineWidth={50}
            paddingAngle={0}
            radius={40}
            // rounded
            // startAngle={0}
            // viewBoxSize={[100, 100]}

            lengthAngle={360}
            animate
            // animation
            animationDuration={900}
            animationEasing="ease-out"

            segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}

            />);
    }
}

export { CnfPieChart }