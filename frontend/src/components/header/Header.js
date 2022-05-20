import React from 'react';
 import { 
   
  Container  , 
  HamAndImg,
  First , 
  Second,
  ImageSpan,
  Image,
  IconHam ,
  HouseButton



} from './HeaderStyle';
import LinkItem from './LinkItem';

import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <Container>
               <First>
                    <HouseButton>
                       Housing.com
                    </HouseButton>
               </First>
               <Second>
                   <LinkItem 
                     value = "Saved"
                   />
                  <div>
                       List Property <span>Free</span>
                  </div>
                    <LinkItem 
                      value = "News"
                    />
                    <HamAndImg
                    >
                      <IconHam>
                          <GiHamburgerMenu />
                      </IconHam>
                      <ImageSpan>
                          <Image src='https://hemsingh780.github.io/hosted-assest/navHouseImage.webp'/>
                      </ImageSpan>
                    </HamAndImg>
              </Second>
    </Container>

  )
}

export default Header