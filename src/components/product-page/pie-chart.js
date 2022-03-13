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
        this.setMacros = this.setMacros.bind(this); 
    }

    setMacros() {
        if(Object.keys(this.props.MACROS).length) {
            if(this.props.TYPE === "CaloryDistribution") {

                this.FAT = parseFloat(this.props.MACROS.fat) * FAT_CALORY_PERCENTAGE;
                this.PROTEIN = parseFloat(this.props.MACROS.protein) * PROTEIN_CALORY_PERCENTAGE;
                this.CARB = parseFloat(this.props.MACROS.carb) * CARB_CALORY_PERCENTAGE;                
            }
            else {

                this.FAT = parseFloat(this.props.MACROS.fat);
                this.PROTEIN = parseFloat(this.props.MACROS.protein);
                this.CARB = parseFloat(this.props.MACROS.carb);
            }
        }
    }

    getLabelData(fatValue, proteinValue, carbValue) {
        let labelData = [];
        if(fatValue !== 0) labelData.push( { title: 'Fat',  value: this.FAT, color: '#FCD668' });
        if(carbValue !== 0) labelData.push( { title: 'Carb', value: this.CARB, color: '#636363' });
        if(proteinValue !== 0) labelData.push({ title: 'Protein', value: this.PROTEIN, color: '#4E8CF4' });
        return labelData
    }

    render() {

        if(Object.keys(this.props.MACROS).length === 0) return (<></>);
        const shiftSize = 3;
        this.setMacros();
        return (
            <PieChart style={{ height: '171px', width : "auto" /*backgroundColor : 'gray'*/ }}
            data={this.getLabelData(this.FAT, this.PROTEIN, this.CARB)}



            label={({ dataEntry }) => dataEntry.title}

            labelStyle={{
                fontSize: "6px",
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