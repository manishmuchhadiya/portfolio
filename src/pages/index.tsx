'use client'

import { CNLink } from '@/components/chakra-next'
import { siteConfig } from '@/libs/configs/site.config'
import { projectsData } from '@/libs/data/project.data'
import { worksData } from '@/libs/data/work.data'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Separator,
  SimpleGrid,
  Stack,
  Text,
  Container, Grid, GridItem, Input, Textarea, VStack, Field,
} from '@chakra-ui/react'

import { IconType } from 'react-icons'
import { BiLogoFirebase, BiLogoMongodb, BiLogoRedux, BiLogoTailwindCss } from 'react-icons/bi'
import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
} from 'react-icons/fa'
import { FaRegCalendarDays, FaXTwitter } from 'react-icons/fa6'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiExpress } from 'react-icons/si'

import type React from 'react'
import { useState } from 'react'

import { HiMail } from 'react-icons/hi'
import { HiPhone } from 'react-icons/hi'

import { FaMapMarkerAlt } from 'react-icons/fa'


export default function Home() {
  return (
    <>
      <title>{siteConfig.profile.name}</title>
      <meta name="description" content={siteConfig.profile.about} />
      <meta name="keywords" content={siteConfig.profile.keywords.join(',')} />
      <Flex
        gap={4}
        flexDirection={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Box
          width={{
            base: '100%',
            lg: '40%',
          }}
        >
          <About />
        </Box>
        <Stack gap={10} flex={1}>
          <TechStack />
          <Projects />
          <Work />
          <ContactForm />
        </Stack>
      </Flex>
    </>
  )
}

const About = () => {
  const socials: {
    Icon: IconType
    href: string
    title: string
  }[] = [
    {
      Icon: FaGithub,
      href: siteConfig.social.githubHref,
      title: 'Github',
    },
    {
      Icon: FaXTwitter,
      href: siteConfig.social.twitterHref,
      title: 'Twitter',
    },
    {
      Icon: FaLinkedin,
      href: siteConfig.social.linkedinHref,
      title: 'LinkedIn',
    },
  ]
  return (
    <Stack
      p={6}
      gap={4}
      borderWidth="1px"
      borderColor="gray.subtel"
      borderRadius="md"
      height={'fit-content'}
      position={{ md: 'sticky' }}
      top={{ md: 24 }}
    >
      <Heading as={'h1'} fontSize={'xl'} color={'brand'}>
        {siteConfig.profile.name}
      </Heading>
      <Text fontSize={'sm'} color={'brand.secondary'}>
        {siteConfig.profile.about}
      </Text>
      <Center>
        {socials.map((item) => (
          <Button key={item.title} variant={'outline'} p={2} borderRadius={'full'} border={0}>
            <CNLink href={item.href} color={'Brand'}>
              <item.Icon />
            </CNLink>
          </Button>
        ))}
      </Center>
      <Flex direction={'column'} gap={4} justifyContent={'space-between'}>
        <Flex justifyContent={'space-between'} gap={2}>
          <Flex direction="column" flex={1}>
            <Heading as="h3" fontSize="sm" fontWeight="bold" lineHeight="short">
              {siteConfig.profile.experience}
            </Heading>
            <Text fontSize="xs" color="brand.secondary">
              Experience
            </Text>
          </Flex>
          <Flex direction="column" flex={1} textAlign={'right'}>
            <Heading as="h3" fontSize="sm" fontWeight="bold" lineHeight="short">
              {siteConfig.profile.location}
            </Heading>
            <Text fontSize="xs" color="brand.secondary">
              Location
            </Text>
          </Flex>
        </Flex>
        <Button borderRadius={'md'}>
          <IoMdCheckmarkCircleOutline />
          Hire me
        </Button>
      </Flex>
    </Stack>
  )
}

const TechStack = () => {
  const items = [
    { name: 'JavaScript', badge: <IoLogoJavascript /> },
    { name: 'React', badge: <FaReact /> },
    { name: 'Tailwind', badge: <BiLogoTailwindCss /> },
    { name: 'Redux', badge: <BiLogoRedux /> },
    { name: 'HTML5', badge: <FaHtml5 /> },
    { name: 'CSS3', badge: <FaCss3 /> },
    { name: 'Node', badge: <FaNodeJs /> },
    { name: 'Express', badge: <SiExpress /> },
    { name: 'Python', badge: <FaPython /> },
    { name: 'MongoDB', badge: <BiLogoMongodb /> },
    { name: 'Firebase', badge: <BiLogoFirebase /> },
    { name: 'Git', badge: <FaGitAlt /> },
    { name: 'Docker', badge: <FaDocker /> },
    { name: 'Java', badge: <FaJava /> },
    { name: 'Wordpress', badge: <FaWordpress /> },
    // { name: 'TypeScript', badge: <BiLogoTypescript /> },
    // { name: 'Next', badge: <RiNextjsFill /> },
    // { name: 'Flask', badge: <BiLogoFlask /> },
    // { name: 'AWS', badge: <FaAws /> },
    // { name: 'OpenAI', badge: <AiOutlineOpenAI /> },
    // { name: 'Prisma', badge: <SiPrisma /> },
    // { name: 'MUI', badge: <SiMui /> },
  ]

  return (
    <Stack gap={4} id="home">
      <Heading as={'h2'} fontSize={'xl'} color={'brand'}>
        Tech Stack
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3 }} gap={4}>
        {items.map((tech, index) => {
          return (
            <Button
              key={index}
              variant={'outline'}
              _hover={{ bg: 'brand.muted' }}
              color={'brand'}
              borderColor={'gray.subtel'}
            >
              {tech.badge}
              {tech.name}
            </Button>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

const Projects = () => {
  return (
    <Stack gap={4} id="projects">
      <Heading as={'h2'} fontSize={'2xl'} color={'brand'}>
        Projects
      </Heading>
      {projectsData.map((project, index) => {
        return (
          <CNLink
            key={index}
            href={project.href}
            borderWidth={'1px'}
            borderColor={'gray.subtel'}
            _focus={{
              textDecoration: 'none',
              boxShadow: 'none',
              borderColor: 'brand.emphasized',
              border: 'none',
            }}
            borderRadius={'md'}
            p={6}
            _hover={{ textDecoration: 'none', bgColor: 'brand.muted' }}
            target="_blank"
          >
            <Stack alignItems="start">
              <Heading as="h3" fontSize="lg" color={'brand'} fontWeight="bold" textAlign="start">
                {project.title}
              </Heading>
              <Text color="brand.secondary" fontSize={'sm'}>
                {project.description}
              </Text>
            </Stack>
          </CNLink>
        )
      })}
    </Stack>
  )
}

const Work = () => {
  return (
    <Stack gap={4} id="work">
      <Heading as={'h2'} fontSize={'2xl'} color={'brand'}>
        Work
      </Heading>
      <Stack
        gap={5}
        p={6}
        borderWidth={'1px'}
        borderColor={'gray.subtel'}
        borderRadius={'lg'}
        separator={<Separator opacity={1} color={'brand'} />}
      >
        {worksData.map((work, index) => {
          return (
            <Stack gap={4} key={index} direction="column">
              <Flex justify={'space-between'} alignItems={'end'}>
                <Heading as="h3" fontSize="lg" color={'brand'} fontWeight="bold" textAlign="start">
                  {work.company}
                </Heading>
                <HStack borderWidth={'1px'} p={2} borderRadius={'lg'} borderColor={'gray.subtel'}>
                  <FaRegCalendarDays size={14} />
                  <Text fontSize={'xs'} color={'brand'}>
                    {work.fromDate} - {work.toDate}
                  </Text>
                </HStack>
              </Flex>
              <Stack
                fontSize={'sm'}
                color={'brand.secondary'}
                as={'ul'}
                listStyleType={'disc'}
                ml={4}
              >
                {work.deliverable.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </Stack>
            </Stack>
          )
        })}
      </Stack>
    </Stack>
  )
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target as HTMLFormElement
      const formDataToSend = new FormData(form)

      const response = await fetch('https://formspree.io/f/xkgbzbzw', {
        method:'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitted(true)

        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        console.error('Form submission failed with status:', response.status)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Container maxW="4xl" py={6}>
        <Box
          // bg="white"
          borderRadius="lg"
          border="1px"
          borderColor="gray.200"
          _dark={{ bg: 'gray.800', borderColor: 'gray.600' }}
          shadow="sm"
        >
          <Box textAlign="center" py={12} px={6}>
            <Box
              w={16}
              h={16}
              bg="green.100"
              _dark={{ bg: 'green.900' }}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              <HiMail size={32} color="var(--chakra-colors-green-600)" />
            </Box>
            <Heading size="lg" mb={2}>
              Message Sent!
            </Heading>
            <Text color="gray.600" _dark={{ color: 'gray.300' }}>
            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </Text>
          </Box>
        </Box>
      </Container>
    )
  }

  return (
    <Container
      maxW="4xl"
      py={6}
      id="ContactForm"
      borderWidth={'1px'}
      p={5}
      borderRadius={'lg'}
      borderColor={'gray.subtel'}
    >
      <VStack gap={8} mb={8} textAlign="center">
        <Heading size="2xl">Get In Touch</Heading>

        <Text color="gray.600" _dark={{ color: 'gray.300' }} maxW="2xl">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you. Send me a
          message and I&apos;ll respond as soon as possible.
        </Text>
      </VStack>

      <Grid templateColumns={{ base: '1fr', md: '1fr 2fr' }} gap={8}>
        {/* Contact Info */}
        <GridItem>
          <VStack gap={6} align="stretch">
            <HStack gap={4} align="start">
              <Box
                w={10}
                h={10}
                bg="blue.50"
                _dark={{ bg: 'blue.900' }}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <HiMail size={20} />
              </Box>
              <Box minW={0}>
                <Heading size="sm" mb={1}>
                  Email
                </Heading>
                <Text
                  fontSize="sm"
                  color="gray.600"
                  _dark={{ color: 'gray.300' }}
                  wordBreak="break-all"
                  whiteSpace="normal"
                >
                  manishmuchhadiya8@gmail.com
                </Text>
              </Box>
            </HStack>

            <HStack gap={4} align="start">
              <Box
                w={10}
                h={10}
                bg="blue.50"
                _dark={{ bg: 'blue.900' }}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <HiPhone size={20} />
              </Box>
              <Box>
                <Heading size="sm" mb={1}>
                  Phone
                </Heading>
                <Text color="gray.600" _dark={{ color: 'gray.300' }}>
                  +91 9979492318
                </Text>
              </Box>
            </HStack>

            <HStack gap={4} align="start">
              <Box
                w={10}
                h={10}
                bg="blue.50"
                _dark={{ bg: 'blue.900' }}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <FaMapMarkerAlt size={20} />
              </Box>
              <Box>
                <Heading size="sm" mb={1}>
                  Location
                </Heading>
                <Text color="gray.600" _dark={{ color: 'gray.300' }}>
                  Morbi, Gujarat
                </Text>
              </Box>
            </HStack>
          </VStack>
        </GridItem>

        {/* Contact Form */}
        <GridItem>
          <Box borderRadius="lg" border="1px" shadow="sm">
            <Box
              p={6}
              borderBottom="1px"
              borderColor="gray.200"
              _dark={{ borderColor: 'gray.600' }}
            >
              <Heading size="md">Send Message</Heading>
              <Text color="gray.600" _dark={{ color: 'gray.300' }} mt={2}>
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </Text>
            </Box>
            <Box p={6}>
              <Box as="form" onSubmit={handleSubmit}>
                <VStack gap={6}>
                  <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4} w="full">
                    <GridItem>
                      <Field.Root required>
                        <Field.Label>Full Name</Field.Label>
                        <Input
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Field.Root>
                    </GridItem>
                    <GridItem>
                      <Field.Root required>
                        <Field.Label>Email Address</Field.Label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Field.Root>
                    </GridItem>
                  </Grid>

                  <Field.Root required>
                    <Field.Label>Subject</Field.Label>
                    <Input
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Field.Root>

                  <Field.Root required>
                    <Field.Label>Message</Field.Label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or how I can help you..."
                      minH="120px"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Field.Root>

                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}
