document.addEventListener('DOMContentLoaded', () => {
    const imageDivs = document.querySelectorAll('.images');
    const serviceContainer = document.getElementById('servicesContainer');
    const content = document.getElementById('content');
    const sideBarBtn = document.getElementById('sideBarBtn')
    let wait = true;

    // side Bar is shown upon page load if screen width is within 768px
    if (window.matchMedia("(max-width: 768px)").matches) return sideBarBtn.click();

    // Store original positions
    const originalPositions = Array.from(imageDivs).map(div => ({
        element: div,
        top: div.offsetTop,
        left: div.style.left // Store the original left value
    }));

    imageDivs.forEach(div => {
        div.addEventListener('click', function() {
            
          if (wait) {
                wait = false;
                setTimeout(() => {wait = true}, 2000)
            }   else {return;};

            const clickedDiv = this;
            const otherDivs = Array.from(imageDivs).filter(div => div !== clickedDiv);
            const clickedDivId = clickedDiv.dataset.id;
            const clickedDivColor = getComputedStyle(clickedDiv).backgroundColor;
            console.log(clickedDivColor)


            // Check if the clicked div is already moved
            const isMoved = clickedDiv.style.transform !== '';

            if (isMoved) {
                // Revert to original positions
                originalPositions.forEach(pos => {
                    setTimeout(() => {
                        pos.element.style.transform = ''; // Reset transform
                    },1000)
                    setTimeout(() => {
                        pos.element.style.left = pos.left; // Reset left position
                    }, 1000)
                    content.style.height = '0';
                });
                serviceContainer.style.width = ''; // Reset container width
            } else {

                content.innerHTML = huh(clickedDivId, clickedDivColor);

                // Move clicked div up
                setTimeout(() => {
                    clickedDiv.style.transform = 'translateY(-' + clickedDiv.offsetTop + 'px)';
                    setTimeout(() => {
                        content.style.height = '85.72%';
                    }, 500)
                }, 1000);

                // Move other divs out of view
                otherDivs.forEach(div => {
                    div.style.left = '105%'; // Move to the right
                });

                // Expand service container
                serviceContainer.style.width = '100%';
            }
        });
    });
    const huh = (id, color) => {
      switch(id) {
        case '1':
          return `<div class="h-full overflow-y-scroll w-full">
            <div style="background-color: ${color};" class="w-full flex justify-center">
              <div class="flex flex-col lg:flex-row max-w-screen-xl">
                <div class="flex flex-col w-full lg:w-1/2 p-4">
                  <div>
                    <div class="font-bold">Package includes:</div>
                    <div class="flex flex-row flex-wrap">
                      <div>
                        <ul class="list-disc pl-8">
                          <li>Bouquet of flowers</li>
                          <li>VIP blinkers</li>
                          <li>Driver in semi-formal attire</li>
                          <li>From hotel to ceremony</li>
                        </ul>
                      </div>
                      <div>
                        <ul class="list-disc pl-8">
                          <li>From ceremony to reception</li>
                          <li>First 3 hours rate</li>
                          <li>Additional fee is applicable in excess of 3 hours</li>
                          <li>Price starts at PhP 4,000.00 for our BMW E39</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-5">
                      <div>Please contact for booking assistance (0923) 086 8342</div>
                      <div>Price is subject to change without prior notice.</div>
                    </div>
                  </div>
                  <div class="link mt-auto">Check our social media page for more updates: <span class="text-blue-700 hover:text-blue-600 ml-2"><a href="Https://www.facebook.com/tagaytaybridalcar/" target="_blank"><i class="fa-brands fa-facebook fa-2xl" style="color: #f0f0f0;"></i></a></span>

                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-4">
                  <div class="flex lg:flex-col xl:flex-row w-full mb-2 gap-1">
                    <div class="w-2/3 lg:w-full xl:w-2/3">
                      <img src="images/bridal/bridal-1.png" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="w-1/3 lg:w-full xl:w-1/3 flex flex-col lg:flex-row xl:flex-col justify-between gap-1">
                      <div class="h-auto">
                        <img src="images/bridal/bridal-2.png" alt="" class="w-full h-full object-cover">
                      </div>
                      <div>
                        <img src="images/bridal/bridal-3.png" alt="" class="w-full h-full object-cover">
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row flex-nowrap justify-evenly gap-1">
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-4.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-5.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-6.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-7.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full bg-black flex justify-center">
              <div class="max-w-screen-lg">
                <div class="w-full p-4">
                  <div class="flex flex-row w-full mb-1 gap-1">
                    <div class="w-2/3">
                      <img src="images/bridal/bridal-8.png" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="w-1/3 flex flex-col justify-between gap-1">
                      <div class="h-full">
                        <img src="images/bridal/bridal-9.png" alt="" class="w-full h-full object-cover">
                      </div>
                      <div class="h-full">
                        <img src="images/bridal/bridal-10.png" alt="" class="w-full h-full object-cover">
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row flex-nowrap justify-evenly gap-1">
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-11.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-12.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-13.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-14.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="w-full p-4">
                  <div class="h-2/3 flex flex-row w-full mb-1 gap-1">
                    <div class="w-full">
                      <img src="images/bridal/bridal-15.png" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="w-full">
                      <img src="images/bridal/bridal-16.png" alt="" class="w-full h-full object-cover">
                    </div>
                  </div>
                  <div class="h-1/3 flex flex-row flex-nowrap justify-evenly gap-1">
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-17.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-18.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-19.png" alt="">
                    </div>
                    <div class="w-full">
                      <img class="w-full h-full object-cover" src="images/bridal/bridal-20.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
        case '2': 
          return `
            <div class="h-full overflow-y-scroll w-full">
            <div style="background-color: ${color};" class="w-full flex flex-col">
              <div class="max-w-screen-xl mx-auto">
                <div class="px-5 py-3">
                  <div class="text-center text-xl font-bold mb-3">
                      Emergency Hotline: (0923) 086 8342
                  </div>
                  <div>
                    <div>
                      We are proud to inform you that we can handle any type of towing requirements, no matter how complex or complicated.
                    </div>
                    <div class="mt-2 mb-6">
                      <div>We provide the following Details:</div>
                      <ul>
                        <li>Pick up point:</li>
                        <li>Drop off point:</li>
                        <li>Vehicle type:</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    We are committed to provide fast, affordable, reliable towing and recovery services. We offer our services 24 hours a day, seven days a week. Whether it’s an old rusted antique that you wanted to turn into a project car or roadside emergency assistance, Penguin Towing can assist you. We do everything we can to work with your schedule. Get your free quote today.
                  </div>
                </div>
              </div>
              <div class="bg-black w-full h-0.5"></div>
              <div class="w-full p-3 mx-auto flex justify-center">
                <div class="w-full max-w-screen-sm">
                  <div class="text-center">
                    Our Services
                  </div>
                  <ul class="mt-3">
                    <li>24-Hour Towing & Roadside Assistance</li>
                    <li>Light-Duty Towing</li>
                    <li>Flatbed Towing</li>
                    <li>Long-Distance Towing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex justify-center bg-gray-700 py-2">
              <div class="max-w-screen-lg">
                <div class="flex flex-row gap-1 p-1">
                  <div class="w-1/2 overflow-hidden relative">
                    <img src="images/Towing/towing-1.jpeg" alt="" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 pb-4 w-full text-center">
                      <div class="text-white text-sm">Isuzu 14 Feet Tow Truck</div>
                      <div class="text-white text-sm">Self loading Car carrier</div>
                    </div>
                  </div>
                  <div class="w-1/2 overflow-hidden relative">
                    <img src="images/Towing/towing-2.jpeg" alt="" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 pb-4 w-full text-center">
                      <div class="text-white text-sm">Isuzu 14 Feet Tow Truck</div>
                      <div class="text-white text-sm">Self loading Car carrier</div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row gap-1 p-0.5">
                  <div class="w-2/3 overflow-hidden">
                    <img src="images/Towing/towing-3.png" alt="" class="w-full h-full object-cover">
                  </div>
                  <div class="w-1/3 flex flex-col gap-1">
                    <div class="w-full h-1/2 overflow-hidden">
                      <img src="images/Towing/towing-4.jpeg" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="w-full h-1/2 overflow-hidden">
                      <img src="images/Towing/towing-5.jpeg" alt="" class="w-full h-full object-cover">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
          case '3':
            return `
            <div class="flex flex-col h-full overflow-y-scroll w-full">
            <div class="flex flex-col">
              <div style="background-color: ${color};" class="flex justify-center p-5">
                <div class="max-w-screen-xl py-3">
                  <div>
                    <div>Contact us for proper quotation at <span class="font-bold">(0923) 086 8342</span></div>
                    <div>We offer different trucking services.</div>
                  </div>
                  <div class="w-full h-auto">
                    <img src="images/Trucking/1.png" alt="" class="w-full h-full object-cover">
                  </div>
                </div>
              </div>
              <div class="flex justify-center p-5">
                <div class="max-w-screen-xl py-3">
                  <div>
                    <img src="images/Trucking/2.png" alt="" class="w-full h-full object-cover">
                  </div>
                  <div class="flex flex-row mt-1">
                    <div class="w-1/2 mr-1">
                      <img src="images/Trucking/3.png" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="w-1/2 bg-gray-400">
                      <img src="images/Trucking/4.png" alt="" class="w-full h-full object-cover">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
          case '4':
            return `
            <div class="flex flex-col h-full overflow-y-scroll w-full">
            <div class="flex flex-col">
              <div style="background-color: ${color};" class="flex justify-center p-5">
                <div class="max-w-screen-xl py-3">
                  <div>
                    <div>We offer heavy equipment rental</div>
                    <div class="py-3">Please send us message for proper quotation <span class="font-bold">(0923) 086 8342</span></div>
                  </div>
                  <div>
                    <div>
                      <div>Please provide the project details for proper quotation</div>
                      <ul>
                        <li>1. Location</li>
                        <li>2. Scope of work/project</li>
                        <li>3. Hours</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-center p-5 bg-gray-600">
                <div class="max-w-screen-xl py-3">
                  <div>
                    <img src="images/Rental/1.png" alt="" class="w-full h-full object-cover">
                  </div>
                </div>
              </div>
            </div>
          </div>`
          default:
            return '<div>content not created yet</div>';
        }
    }
});
