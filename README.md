# FloCast by Team Nexalus at SIH2022 Finals

FLOCAST is a NextGen web application developed by Team Nexalus that aims to serve as a solution for Two-way mobile communication (G2C and C2G) for the dissemination of flood forecasts to end-users with the collection of real-time data of inundation areas through crowd sourcing. The project is hosted under the problem statement of the Central Water Commission, Ministry of Jal Shakti, Department of Water Resources, RD & GR, Govt. of India.

FloCast will allow the user to create flood profiles through the automatic extraction of data from SAR or manual input data. Each flood profile will act as a Feed Thread to which crowdsourcing data can be added/modified. Direct communication i.e G2C & C2G is established by developing a feed interaction infrastructure between the Govt. bodies & citizens for verified flood profiles. We are integrating an Machine Learning model to the webapp using Tensorflow.js to verify the accuracy of the flood profiles. The messaging and direct information exchange is majorly set up using two mediums - Real Time Chat using Twilio PIM & Notification updates using Dynatrace.


## Summary

Citizens of India face critical problems due to sudden and unexpected occurrence of disaster which leads to loss of life and property. The solution we are building majorly focusses to build a communication channel medium between the govt. sources and end users. The product is scalable in terms of implementation as it can operate the functions in offline network connectivity medium. We are implementing ServiceWorker and IndexDB to persist the offline form of data from the affected flood regions with zero to very less internet connectivity. The product will remove the dependency of the end users on telecom service providers to some extent thus supporting the concept of Aatmanirbhar Bharat. The product also uses AWS SNS to send automated and scheduled message notification updates to the end users on the flood profile topics. Check out the LIVE DEMO here.



## Application Workflow

![alt text](https://github.com/nmbaibhab/Flocast-SIH/blob/main/Readme_Images/1_LP6FSBAFXBGQQc62ny76mg.png)
